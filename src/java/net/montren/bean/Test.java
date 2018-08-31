/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.montren.bean;

/**
 *
 * @author Etrio Widodo
 */
public class Test {
   private int id;
   private String name;
   
   public Test( int id,String name) {
      super();
      this.name = name;
      this.id = id;
   }
   public Test() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
