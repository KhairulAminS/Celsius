package org.kas.entity;


import com.opencsv.bean.CsvBindByPosition;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
public class csvEntity {

    @Id
    @CsvBindByPosition(position = 0)
    private String uuid;

    @CsvBindByPosition(position = 2)
    private long timestamp;

    @CsvBindByPosition(position = 3)
    private String temperature;

}
