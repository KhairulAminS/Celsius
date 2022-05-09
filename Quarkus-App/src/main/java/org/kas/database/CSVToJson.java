package org.kas.database;

import com.opencsv.bean.CsvToBeanBuilder;
import org.kas.entity.CelsiusEntity;
import org.kas.entity.csvEntity;

import java.io.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;


public class CSVToJson {

    public static CelsiusEntity csv2Json(File csvFile) throws FileNotFoundException {
        List<csvEntity> beans = new CsvToBeanBuilder(new FileReader(csvFile))
                .withType(csvEntity.class)
                .build()
                .parse();

        ArrayList data = new ArrayList();

        for( csvEntity entity : beans ){
            if(entity.getTemperature() != null){
                HashMap<String, String> addData = new HashMap<>();
                LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(entity.getTimestamp()), ZoneId.systemDefault());
                addData.put("Timestamp", String.valueOf(date));
                addData.put("Temperature", entity.getTemperature());
                data.add( addData );
            }
        }

        CelsiusEntity celsiusEntity = new CelsiusEntity();
        celsiusEntity.setFilename(getFileName(beans.get(1).getUuid()));
        celsiusEntity.setUuid(beans.get(6).getUuid());
        celsiusEntity.setUploadedDate(convertToDate(LocalDateTime.now()));
        celsiusEntity.setData(data);

        return celsiusEntity;
    }


    private static String getFileName(String beanData){
        String[] arrOfStr = beanData.split("=\"", 3);
        return arrOfStr[2];
    }

    private static String convertToDate(LocalDateTime dateToConvert) {
        return Date.from(dateToConvert.atZone(ZoneId.systemDefault()).toInstant()).toString();
    }
}
