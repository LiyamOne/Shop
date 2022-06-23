import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Message, Position} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) {
  }

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`http://localhost:5000/api/position/${categoryId}`)
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('http://localhost:5000/api/position', position)
  }

  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(`http://localhost:5000/api/position/${position._id}`, position)
  }

  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`http://localhost:5000/api/position/${position._id}`)
  }
}

