package com.example.wbdvsp2103tonglingluserverjava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
This class represent a data model, Widget. Assignment 5 only needs the following fields.
The widget id, the related topic id, the type, the size and the text inside.
 */
@Entity
@Table(name="widgets")
public class Widget {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String topicId;
  private String type;
  private Integer size;
  private Integer width;
  private Integer height;
  private String text;
  private String name;
  private Boolean ordered;
  private String src;

  public Widget(Long id, String topicId, String type, Integer size, Integer width, Integer height,
                String text, String name, Boolean ordered, String src) {
    this.id = id;
    this.topicId = topicId;
    this.type = type;
    this.size = size;
    this.width = width;
    this.height = height;
    this.text = text;
    this.name = name;
    this.ordered = ordered;
    this.src = src;
  }

  public Widget() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public Integer getWidth() {
    return width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Boolean isOrdered() {
    return ordered;
  }

  public void setOrdered(Boolean ordered) {
    this.ordered = ordered;
  }

  public String getSrc() {
    return src;
  }

  public void setSrc(String src) {
    this.src = src;
  }

}
