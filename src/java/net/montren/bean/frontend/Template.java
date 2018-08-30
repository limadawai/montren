/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.montren.bean.frontend;

import java.math.BigDecimal;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 *
 * @author Etrio Widodo
 */
@ManagedBean(name="daofrontend")
@SessionScoped
public class Template {
    
    private int         tahun;
    private String      kodeprovinsi;
    private String      kodepemda;
    private String      kodesatker;
    private String      kodelev1;
    private String      kodelev2;
    private String      kodelev3;
    private String      uraianlev1;
    private String      uraianlev2;
    private String      uraianlev3;
    private BigDecimal  nilaiawal;
    private int         periode;
    private String      jenisdata;
    private long        index;

        public int getTahun() {
            return tahun;
        }

        public void setTahun(int tahun) {
            this.tahun = tahun;
        }

        public String getKodeprovinsi() {
            return kodeprovinsi;
        }

        public void setKodeprovinsi(String kodeprovinsi) {
            this.kodeprovinsi = kodeprovinsi;
        }

        public String getKodepemda() {
            return kodepemda;
        }

        public void setKodepemda(String kodepemda) {
            this.kodepemda = kodepemda;
        }

        public String getKodesatker() {
            return kodesatker;
        }

        public void setKodesatker(String kodesatker) {
            this.kodesatker = kodesatker;
        }

        public String getKodelev1() {
            return kodelev1;
        }

        public void setKodelev1(String kodelev1) {
            this.kodelev1 = kodelev1;
        }

        public String getKodelev2() {
            return kodelev2;
        }

        public void setKodelev2(String kodelev2) {
            this.kodelev2 = kodelev2;
        }

        public String getKodelev3() {
            return kodelev3;
        }

        public void setKodelev3(String kodelev3) {
            this.kodelev3 = kodelev3;
        }

        public String getUraianlev1() {
            return uraianlev1;
        }

        public void setUraianlev1(String uraianlev1) {
            this.uraianlev1 = uraianlev1;
        }

        public String getUraianlev2() {
            return uraianlev2;
        }

        public void setUraianlev2(String uraianlev2) {
            this.uraianlev2 = uraianlev2;
        }

        public String getUraianlev3() {
            return uraianlev3;
        }

        public void setUraianlev3(String uraianlev3) {
            this.uraianlev3 = uraianlev3;
        }

        public BigDecimal getNilaiawal() {
            return nilaiawal;
        }

        public void setNilaiawal(BigDecimal nilaiawal) {
            this.nilaiawal = nilaiawal;
        }

        public int getPeriode() {
            return periode;
        }

        public void setPeriode(int periode) {
            this.periode = periode;
        }

        public String getJenisdata() {
            return jenisdata;
        }

        public void setJenisdata(String jenisdata) {
            this.jenisdata = jenisdata;
        }

        public long getIndex() {
            return index;
        }

        public void setIndex(long index) {
            this.index = index;
        }



    
    
}
