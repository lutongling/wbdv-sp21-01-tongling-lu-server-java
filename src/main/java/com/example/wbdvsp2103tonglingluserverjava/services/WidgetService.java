package com.example.wbdvsp2103tonglingluserverjava.services;

import com.example.wbdvsp2103tonglingluserverjava.models.Widget;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/*
This class represents a service class that manipulates a list of widgets instances.
This Assignment 5 is maintaining the widgets in a local memory of array list.
 */
@Service
public class WidgetService {
  private List<Widget> widgets = new ArrayList<Widget>();
  {
    Widget w1 = new Widget(123l, "605b751b777d75001795d9f6", "HEADING", 1, "Widgets for topic 1");
    Widget w2 = new Widget(234l, "605b751b777d75001795d9f6", "PARAGRAPH", 1, "Lorem Ipsum for topic 1");
    Widget w3 = new Widget(345l, "605b7524777d75001795d9f7", "HEADING", 2, "Widgets for topic 2");
    Widget w4 = new Widget(456l, "605b7524777d75001795d9f7", "PARAGRAPH", 1, "Lorem Ipsum for topic 2");
    Widget w5 = new Widget(567l, "605b7524777d75001795d9f7", "PARAGRAPH", 1, "Lorem Ipsum for topic 2");
    Widget w6 = new Widget(678l, "6047cb03f10b760017274b76", "HEADING", 1, "Widgets for topic SELECT");
    Widget w7 = new Widget(789l, "6047cb03f10b760017274b76", "HEADING", 4, "Widgets for topic SELECT");
    Widget w8 = new Widget(890l, "6047cd7bf10b760017274b7e", "HEADING", 3, "Widgets for topic CRUD");
    Widget w9 = new Widget(012l, "6047cd7bf10b760017274b7e", "PARAGRAPH", 1, "Widgets for topic CRUD");

    widgets.add(w1);
    widgets.add(w2);
    widgets.add(w3);
    widgets.add(w4);
    widgets.add(w5);
    widgets.add(w6);
    widgets.add(w7);
    widgets.add(w8);
    widgets.add(w9);
  }

  public Widget createWidget(String topicId, Widget widget) {
    widget.setTopicId(topicId);
    widget.setId((new Date()).getTime());
    widgets.add(widget);
    return widget;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public List<Widget> findWidgetsForTopic(String topicId) {
    List<Widget> ws = new ArrayList<Widget>();

    for(Widget w: widgets) {
      if(w.getTopicId().equals(topicId)) {
        ws.add(w);
      }
    }
    return ws;
  }

  public Integer deleteWidget(Long id) {
    int index = -1;
    for(int i = 0; i < widgets.size(); i++) {
      if(widgets.get(i).getId().equals(id)) {
        index = i;
        widgets.remove(index);
        return 1;
      }
    }
    return -1;
  }

  public Integer updateWidget(Long id, Widget widget) {
    for(int i = 0; i < widgets.size(); i++) {
      if(widgets.get(i).getId().equals(id)) {
        widgets.set(i, widget);
        return 1;
      }
    }
    return -1;
  }
}
