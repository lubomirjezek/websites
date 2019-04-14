import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from '../../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly ARTICLES: Article[] = [
    {
      id: 'youtube',
      name: 'Youtube',
      text: `Kanál Jan Hanko jsem si založil v roce 2007, abych sdílel svá parkour videa s lidmi z komunity. Za ty roky jsem nahrál pouze pár svých skákacích videí. Aktivně jsem začal natáčet pro širokou veřejnost na YouTube v roce 2018, kdy jsem spojil parkour se zábavou. Momentálně mířím ke 100.000 odběratelům. Nahrávám spontánně různé tipy videí. Hlavní tématikou je parkour, zábava, reakce a inspirace.`,
      raw_link: 'https://www.youtube.com/user/pkhanzi',
      link: 'youtube channel',
      image: '../../../../../assets/images/yt.png',
      color: 'secondary'
    }, {
      id: 'muj-merch',
      name: 'Můj merch',
      text: 'Tady si můžeš zakoupit můj skromný merch se symboly, které symbolizují mou cestu.',
      raw_link: '',
      link: '',
      image: '../../../../../assets/images/merch.png',
      color: 'primary'
    }, {
      id: 'usc-store',
      name: 'Usc store',
      text: `Od počátků vzniknu mého parkour týmu Urban Sense (2010) jsem experimentoval s oblečením a měl jsem snahu sehnat vhodné oblečení na parkour, které jsem pomalu nechával sám vyrábět a navrhovat pod značkou Urban Sense Clothing. Později jsem složitý název zkrátil na USC. Po letech zkušeností s výrobou oblečení jsem začal vyrábět celý sortiment parkour oblečení, který je založený na originalitě a kvalitě. Oblečení navrhuji, dovážím kvalitní materiál z celé Evropy a nechávám šít v ČR. Mou snahou je spojit elegantní střih s funkčností a nabídnout tak nejen talentovaným sportovcům kvalitní značkové oblečení.`,
      raw_link: 'http://usc-store.cz/',
      link: 'usc-store.cz',
      image: '../../../../../assets/images/uss.png',
      color: 'primary'
    }, {
      id: 'us-academy',
      name: 'US academy',
      text: `S mou profesionalizací v oboru parkouru jsem krátce na to začal dělat trenéra a instruktora na kempech, workshopech, kroužcích a dalších podobných akcích. Za celé roky mého působení na různých místech jsem zorganizoval vlastní projekt Urban Sense Academy, který je zastřešený organizací Urban Sense s kvalitním trenérským vedením parkouru. Společně s celým týmem Urban Sense Academy pořádáme po ČR parkour kroužky, workshopy a tábory.`,
      raw_link: 'https://www.usacademy.cz',
      link: 'usacademy.cz',
      image: '../../../../../assets/images/usa.png',
      color: 'primary'
    }, {
      id: 'urban-sense',
      name: 'Urban Sense',
      text: `V roce 2010 jsme s kamarádem na střední škole založili náš společný parkour tým Urban Sense, a protože jsme byli v parkouru velmi šikovný, tak jsme neměli vůbec malé cíle a krátce na to jsme do Urban Sense přijali elitu tehdejšího českého parkouru. Společně jsme se vydali na cestu komercializace parkouru s cílem, že by nás mohl jednou parkour živit. Za ta léta vzniklo mnoho krásných profi videí a měli jsme sponzory v podobě světových značek. Dnes funguje Urban Sense tým jako parta kamarádů, kteří společně vystupují a pracují na společných projektech. Naposledy jsme se veřejně objevili v Česko-slovensko má talent 2018, kde jsme postoupili.`,
      raw_link: 'http://www.urbansense.cz/',
      link: 'urbansense.cz',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }, {
      id: 'studio-usp',
      name: 'Studio usp',
      text: `Celé mé vystupování je těsně propojeno s audiovizuálem. Spojením pohybu a jeho správné zachycení na kameru je předpokladem ke kvalitním videím a fotkám. Studoval jsem střední školu se zaměřením na audiovizi a film, kde jsem se potkal mého kamaráda a kolegu, se kterým dnes provozujeme filmovou produkci Studio USP.`,
      raw_link: '',
      link: '',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }
  ];

  constructor() { }

  public getArticle(id: string): Observable<Article> {
    return of(this.ARTICLES.find(article => article.id === id));
  }

}
