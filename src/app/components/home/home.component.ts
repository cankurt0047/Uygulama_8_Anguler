import { DataService } from './../../services/data.service';
import { Sonuc } from './../../models/Sonuc';
import { Urun } from './../../models/Urun';
import { Kategori } from './../../models/Kategori';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  kategoriler!: Kategori[];
  urunler!:Urun[];
  katSonuc:Sonuc = new Sonuc();
  urunSonuc:Sonuc = new Sonuc();
  constructor(
    public servis: DataService
  ) { }

  ngOnInit(): void{
    this.KategoriListeGetir();
    this.UrunListeGetir();
  }
  UrunListeGetir(){
    this.urunler = this.servis.UrunListele();
  }

  KategoriListeGetir(){
    this.kategoriler = this.servis.KategoriListele();
  }
  KategoriKaydet(k: string){
    var yeni: Kategori = new Kategori();
    yeni.katId = Math.floor(Math.random() * 100);
    yeni.katAdi = k;
    this.katSonuc = this.servis.KategoriEkle(yeni);
  }


    UrunKaydet(ad: string, fiyat:any, katId:any){
      var yeni: Urun = new Urun();
      var kat: Kategori = this.servis.KategoriById(katId);
      yeni.urunId = Math.floor(Math.random() * 100);
      yeni.urunAdi = ad;
      yeni.urunFiyat  =fiyat;
      yeni.urunKatId = katId;
      yeni.urunKatAdi = kat.katAdi;
      this.urunSonuc = this.servis.UrunEkle(yeni);
    }


}
