package org.kas.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.quarkus.hibernate.orm.panache.PanacheEntityBase.delete;


@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
public class CelsiusEntity {

    @Id
    @GeneratedValue
    private long id;

    private String filename;
    private String date;

    @Type(type = "com.vladmihalcea.hibernate.type.json.JsonType")
    private List<Map<String, String>> data;

}


