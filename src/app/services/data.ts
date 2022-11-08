import { Urun } from '../models/Urun';
import { Kategori } from './../models/Kategori';

export const Kategoriler: Kategori[] = [
    {katId: 1, katAdi:"Kırtasiye"},
    {katId: 2, katAdi:"Gıda"},
    {katId: 3, katAdi:"Manav"}
    
];

export const Urunler: Urun[] = [
    {urunId: 1, urunAdi:"Kalem" ,urunFiyat:1,urunKatId:1,urunKatAdi:"Kırtasiye"},
    {urunId: 2, urunAdi:"Defter" ,urunFiyat:6,urunKatId:1,urunKatAdi:"Kırtasiye"},
    {urunId: 3, urunAdi:"Silgi" ,urunFiyat:5,urunKatId:1,urunKatAdi:"Kırtasiye"},
    {urunId: 4, urunAdi:"Çay" ,urunFiyat:10,urunKatId:2,urunKatAdi:"Gıda"},
    {urunId: 5, urunAdi:"Şeker" ,urunFiyat:54,urunKatId:2,urunKatAdi:"Gıda"},
    {urunId: 6, urunAdi:"Elma" ,urunFiyat:40,urunKatId:3,urunKatAdi:"Manav"},
    {urunId: 7, urunAdi:"Armut" ,urunFiyat:20,urunKatId:3,urunKatAdi:"Manav"},
    {urunId: 8, urunAdi:"Erik" ,urunFiyat:14,urunKatId:3,urunKatAdi:"Manav"},
   
]
