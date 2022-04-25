package org.kas.database;

import com.opencsv.bean.CsvToBeanBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
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
            HashMap<String, String> addData = new HashMap<>();
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(entity.getTimestamp()), ZoneId.systemDefault());
            addData.put(String.valueOf(date), entity.getTemperature());
            data.add( addData );
        }
        CelsiusEntity celsiusEntity = new CelsiusEntity();
        celsiusEntity.setFilename(csvFile.getName());
        celsiusEntity.setId(UUID.fromString(beans.get(6).getId()));
        celsiusEntity.setUploadedDate(String.valueOf(LocalDateTime.now()));
        celsiusEntity.setData(data);

        return celsiusEntity;
    }
}
