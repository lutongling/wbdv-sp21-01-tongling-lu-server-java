package com.example.wbdvsp2103tonglingluserverjava.repositories;

import com.example.wbdvsp2103tonglingluserverjava.models.Widget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/*
This interface extends CRUD repo for implementing RESTful Services in WidgetService.
 */
public interface WidgetRepository extends CrudRepository<Widget, Long> {
  @Query(value="SELECT * FROM widgets WHERE topic_id=:tid", nativeQuery = true)
  List<Widget> findWidgetsForTopic(@Param("tid") String topicId);

}
