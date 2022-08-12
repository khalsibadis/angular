import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

   listPays = [
    {
      nom: 'France',
      population: 5,
      superficie: 2,
      contient: 'Europe',
      produit: 250,
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
    },
    {
      nom: 'Allemagne',
      population: 6,
      superficie: 15,
      contient: 'Europe',
      produit: 3,
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAJ1BMVEX+zgABAQHcAgHeAQHJAAD/xBwAAgQAAATgAAKjERanDxYAAwLcAQB8mpE/AAABtklEQVR4nO3bwW7TQBRA0YFA2jT8//ciC8mOh0l1CwuodM7KY/t5RldqdxlfqMa/PsAnolWnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1X3q9V983B3X97v0+V5OX1suvewfPpk+cHzTot3fv/qYvhBOM5yq/PIuG5eNtfDsTyevOyWI9Pcanj14PrsarnV++ech5+fOJxzGt7W/ga78ba5bd52D8vz1e14Mo0s703Dqxc/tlXZ4LbwV5/Zl+Oyed1cdq/7er46XpxGprl5udrgD7b62Dnf/8zqnPPb5+X4QTW+UmnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadVp1WnVadWNC9VY/u6cFb+j7/y/6rTqxjeq8Z1qAAAAAAAAAAAAAAAAAAAA8N/7CYhHC+8gUV1YAAAAAElFTkSuQmCC',
    },
    {
      nom: 'Tunis',
      population: 3,
      superficie: 10,
      contient: 'Afrique',
      produit: 10000,
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fc3%2FFlag_of_France.svg%2F1200px-Flag_of_France.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFrance&tbnid=gmwG9FbBr9R8jM&vet=12ahUKEwip38Dz37z5AhUu7LsIHdbjDbQQMygEegUIARDlAQ..i&docid=_BchAYr7cuAkDM&w=1200&h=800&itg=1&q=france&client=opera-gx&ved=2ahUKEwip38Dz37z5AhUu7LsIHdbjDbQQMygEegUIARDlAQ',
    },
  ];

  private listPaysS = new BehaviorSubject([...this.listPays]);
  sharedPays= this.listPaysS.asObservable();

  constructor(private http : HttpClient) { }


  nextPays(message) {
    this.listPays.push(message)
    this.listPaysS.next([...this.listPays])
    console.log(this.sharedPays,this.listPaysS);
  }


}
