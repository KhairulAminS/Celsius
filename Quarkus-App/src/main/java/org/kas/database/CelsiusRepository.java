package org.kas.database;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.kas.entity.CelsiusEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;


/* Repository for custom query method */

@ApplicationScoped
public class CelsiusRepository implements PanacheRepository<CelsiusEntity> {

    public List<CelsiusEntity> findByDate(String date) {
        return list("SELECT entity FROM CelsiusEntity entity WHERE entity.uploadedDate = ?1 ORDER BY id ASC", date);
    }

    public List<CelsiusEntity> findByFileName(String filename) {
        return list("SELECT entity FROM CelsiusEntity entity WHERE entity.filename = ?1 ORDER BY id ASC", filename);
    }

    public void deleteByFileName(String filename) {
        delete("filename", filename);
    }

    public void deleteByDate(String date) {
        delete("uploadedDate", date);
    }
}

