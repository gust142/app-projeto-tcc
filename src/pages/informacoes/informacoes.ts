import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the InformacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {

  public informacoes = [
    {nome:'Mosquito Aedes Aegypti',img:'assets/imgs/mosquito.jpg', descricao:'Aedes aegypti  é o mosquito transmissor da dengue e da febre amarela urbana. Menor do que os mosquitos comuns, é preto com listras brancas no tronco, na cabeça e nas pernas. Suas asas são translúcidas e o ruído que produzem é praticamente inaudível ao ser humano.'+

    ' O macho, como de qualquer espécie, alimenta-se exclusivamente de frutas. A fêmea, no entanto, necessita de sangue para o amaduremento dos ovos que são depositados separadamente nas paredes internas dos objetos, próximos a superfícies de água limpa, local que lhes oferece melhores condições de sobrevivência. No momento da postura são brancos, mas logo se tornam negros e brilhantes.'+
    
    ' Em média, cada mosquito vive em torno de 30 dias e a fêmea chega a colocar entre 150 e 200 ovos. Se forem postos por uma fêmea contaminada pelo vírus da dengue, ao completarem seu ciclo evolutivo, transmitirão a doença.'+
    
    ' Os ovos não são postos na água, e sim milímetros acima de sua superfície, principalmente em recipientes artificiais. Quando chove, o nível da água sobe, entra em contato com os ovos que eclodem em pouco menos de 30 minutos. Em um período que varia entre sete e nove dias, a larva passa por quatro fases até dar origem a um novo mosquito: ovo, larva, pupa e adubo.'+
    
    ' O Aedes aegypti põe seus ovos em recipientes como latas e garrafas vazias, pneus, calhas, caixas d’água descobertas, pratos sob vasos de plantas ou qualquer outro objeto que possa armazenar água da chuva. O mosquito pode procurar ainda criadouro naturais, como bromélias, bambus e buracos em árvores.'+
    
    ' É um mosquito urbano, embora tenha sido encontrado na zona rural, onde foram levados em recipientes que continham ovos e larvas. Próprio das regiões tropical e subtropical, não resiste a baixas temperaturas presentes em altitudes elevadas.'+
    
    ' Estudos demonstram que, uma vez infectada – e isso pode ocorrer numa única inseminação –, a fêmea transmitirá o vírus por toda a vida, havendo a possibilidade de, pelo menos, parte de suas descendentes já nascerem portadoras do vírus.'+
    
    ' As fêmeas preferem o sangue humano como fonte de proteína ao de qualquer outro animal vertebrado. Atacam de manhãzinha ou ao entardecer. Sua saliva possui uma substância anestésica, que torna quase indolor a picada. Tanto a fêmea quanto os machos abrigam-se dentro das casas ou nos terrenos ao redor.'},
    
    {nome: 'Dengue',img:'assets/imgs/dengue.jpg', descricao: 'De origem espanhola a palavra dengue significa "manha", "melindre", estado em que se encontra a pessoa doente. É uma doença infecciosa febril aguda que pode se apresentar de forma benigna ou grave. Isso vai depender de diversos fatores, entre eles: o vírus e a cepa envolvidos, infecção anterior pelo vírus da dengue e fatores individuais como doenças crônicas (diabetes, asma brônquica, anemia falciforme). A doença é transmitida pela picada da fêmea do mosquito Aedes aegypti. Não há transmissão pelo contato direto com um doente ou suas secreções, nem por meio de fontes de água ou alimento.'}
    ,{nome: 'Zika Vírus', img:'assets/imgs/zika.jpg',descricao:'É um arbovírus, um tipo de vírus transmitido por artrópodes, como os insetos. Conhecido pela sigla ZIKV, é parente dos causadores de outras doenças, como a dengue, a febre amarela e a febre ocidental do Nilo.Se você colocou areia e acumulou água no pratinho de planta, lavá-lo com escova, água e sabão. Fazer isso uma vez por semana. Lavar principalmente por dentro com escova e sabão os utensílios usados para guardar água em casa, como jarras, garrafas, potes, baldes e etc. Embale para recolhimento todas as garrafas pet e de vidro vazias que não for usar. As garrafas de vidro não descartadas devem ser guardadas de boca para baixo ou em local coberto.'}

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesPage');
  }

  detalhes(item){
    this.navCtrl.push(DetalhesPage,{
      item: item
    })
  }

}
