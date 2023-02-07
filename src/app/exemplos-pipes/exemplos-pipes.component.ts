import { Component } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning Javascript Data Structures And Algorithms',
    rating: 4.5432,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  livros: string[] = ['Angular 2', 'React']

  filtro: string = ''

  addCurso(valor: any) {
    this.livros.push(valor)
  }

  obterCursos() {

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true
      }
      return false
    })
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'), 2000)
  })

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor Assíncrono 2');
    }, 2000);
  });
}
