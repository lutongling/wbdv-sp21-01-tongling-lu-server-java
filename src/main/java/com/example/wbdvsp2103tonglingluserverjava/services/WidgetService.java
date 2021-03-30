package com.example.wbdvsp2103tonglingluserverjava.services;

import com.example.wbdvsp2103tonglingluserverjava.models.Widget;
import com.example.wbdvsp2103tonglingluserverjava.repositories.WidgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
This class represents a service class that manipulates a list of widgets instances.
The instances are stored in the database.
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

    if (widget.getText() != null) {
      originalWidget.setText(widget.getText());
    }
    if (widget.getType() != null) {
      originalWidget.setType(widget.getType());
    }
    if (widget.getSize() != null) {
      originalWidget.setSize(widget.getSize());
    }
    if (widget.getWidth() != null) {
      originalWidget.setWidth(widget.getWidth());
    }
    if (widget.getHeight() != null) {
      originalWidget.setHeight(widget.getHeight());
    }
    if (widget.getSrc() != null) {
      originalWidget.setSrc(widget.getSrc());
    }
    if (widget.isOrdered() != null) {
      originalWidget.setOrdered(widget.isOrdered());
    }

    repository.save(originalWidget);
    return 1;
  }
}
