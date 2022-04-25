package org.kas.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.*;


@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
public class CelsiusEntity{

    @Id
    private UUID id;

    private String filename;
    private String uploadedDate;

    @Type(type = "com.vladmihalcea.hibernate.type.json.JsonType")
    private List<Map<String, String>> data;

}


