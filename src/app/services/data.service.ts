import { Urun } from './../models/Urun';
import { Sonuc } from './../models/Sonuc';
import { Kategoriler, Urunler } from './data';
import { Kategori } from './../models/Kategori';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


 KategoriListele(){
  return Kategoriler;
 }
 KategoriById(id:number){
  var filtre = Kategoriler.filter(s => s.katId == id);
  return filtre[0];
 }
 KategoriEkle(kat: Kategori){
  var sonuc:  Sonuc = new Sonuc();
  var filtre = Kategoriler.filter(s => s.katAdi == kat.katAdi);
  if(filtre.length > 0){
    sonuc.islem = false;
    sonuc.mesaj = "Girilen Kategori Kayıtlıdır!";
  }
  else{
    Kategoriler.push(kat);
    sonuc.islem = true;
    sonuc.mesaj = "Kategori Eklendi...";
  }
  return sonuc;
 }

  KategoriDuzenle(kat: Kategori){
    var index = Kategoriler.indexOf(kat);
    Kategoriler[index].katAdi = kat.katAdi;
    var sonuc:  Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Kategori Güncellendi...";
    return sonuc;
  }
  KategoriSil(kat: Kategori){
    var sonuc:  Sonuc = new Sonuc();
    var urunler = Urunler.filter(s => s.urunKatId == kat.katId);
    if(urunler.length > 0){
      sonuc.islem = false;
      sonuc.mesaj = "Bu Kategoriye Ait Ürünler Var!";
    } else {
      var index = Kategoriler.indexOf(kat);
      Kategoriler.splice(index, 1);
      sonuc.islem = true;
      sonuc.mesaj = "Kategori Silindi...";
    }
    return sonuc;
  }
  UrunListele(){
    return Urunler;
  }
  UrunById(id:number){
    var filtre = Urunler.filter(s => s.urunId == id);
    return filtre[0];
  }
  UrunListeleByKatId(katId:number){
    var filtre = Urunler.filter(s => s.urunKatId == katId);
    return filtre;
  }
  UrunEkle(urun: Urun){
    var sonuc:  Sonuc = new Sonuc();
    var filtre = Urunler.filter(s => s.urunAdi == urun.urunAdi);
    if(filtre.length > 0){
      sonuc.islem = false;
      sonuc.mesaj = "Girilen Ürün Kayıtlıdır!";
    }
    else{
      Urunler.push(urun);
      sonuc.islem = true;
      sonuc.mesaj = "Ürün Eklendi...";
    }
    return sonuc;
  }
  UrunDuzenle(urun: Urun){
    var index = Urunler.indexOf(urun);
    Urunler[index].urunAdi = urun.urunAdi;
    Urunler[index].urunFiyat = urun.urunFiyat;
    Urunler[index].urunKatId = urun.urunKatId;
    var sonuc:  Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Ürün Güncellendi...";
    return sonuc;
  }
  UrunSil(urun: Urun){
    
    var index = Urunler.indexOf(urun);
    var sonuc:  Sonuc = new Sonuc();
    Urunler.splice(index, 1);
    sonuc.islem = true;
    sonuc.mesaj = "Ürün Silindi...";
    return sonuc;
  }

}