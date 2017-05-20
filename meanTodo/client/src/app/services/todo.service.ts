import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService {
  constructor (private _http: Http) {

  }

  getTodos () {
    return this._http.get('/todos').map(res => res.json()) 
  }

  saveTodo (todo: any) {
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.post('/todo', JSON.stringify(todo), { headers: headers })
      .map(res => res.json())
  }

  updateTodo (todo: any) {
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.put('/todo/' + todo._id, JSON.stringify(todo), { headers: headers })
      .map(res => res.json())
  }

  deleteTodo (id: any) {
    return this._http.delete('/todo/' + id)
    .map(res => res.json())
  }
}

