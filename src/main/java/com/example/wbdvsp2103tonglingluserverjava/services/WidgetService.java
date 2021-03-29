package com.example.wbdvsp2103tonglingluserverjava.services;

import com.example.wbdvsp2103tonglingluserverjava.models.Widget;
import com.example.wbdvsp2103tonglingluserverjava.repositories.WidgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
This class represents a service class that manipulates a list of widgets instances.
This Assignment 5 is maintaining the widgets in a local memory of array list.
 */
@Service
public class WidgetService {

  @Autowired
  WidgetRepository repository;

  public Widget createWidget(String topicId, Widget widget) {
    widget.setTopicId(topicId);
    return repository.save(widget);
  }

  public List<Widget> findAllWidgets() {
    return (List<Widget>) repository.findAll();
  }

  public Widget findWidgetById(Long id) {
    return repository.findById(id).get();
  }

  public List<Widget> findWidgetsForTopic(String topicId) {
    return repository.findWidgetsForTopic(topicId);
  }

  public Integer deleteWidget(Long id) {
    repository.deleteById(id);
    return 1;
  }

  public Integer updateWidget(Long id, Widget widget) {
    Widget originalWidget = findWidgetById(id);
    originalWidget.setText(widget.getText());
    originalWidget.setType(widget.getType());
    originalWidget.setSize(widget.getSize());

    repository.save(originalWidget);
    return 1;
  }
}
