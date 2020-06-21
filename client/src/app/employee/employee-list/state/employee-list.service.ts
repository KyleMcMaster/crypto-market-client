import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvService } from 'src/app/shared/env.service';
import {
  ListResponse,
  mapListResponseToData,
} from 'src/app/shared/list-response';
import { Employee } from '../../employee-detail/state/employee.model';
import { EmployeeCreate, EmployeeListItem } from './employee-list.model';
import { EmployeeListStore } from './employee-list.store';

@Injectable({ providedIn: 'root' })
export class EmployeeListService {
  private readonly apiRootUrl: string;

  constructor(
    private http: HttpClient,
    envService: EnvService,
    private store: EmployeeListStore,
    private toastr: ToastrService,
  ) {
    this.apiRootUrl = envService.apiRootUrl;
  }

  getEmployees() {
    this.store.setLoading(true);
    return this.http
      .get<ListResponse<EmployeeListItem>>(`${this.apiRootUrl}/Employees`)
      .pipe(
        catchError((err) => {
          this.store.setError({
            message: 'Could not load employees',
          });
          return of([]);
        }),
        mapListResponseToData(),
      )
      .subscribe({
        next: (response) => this.store.set(response),
        complete: () => this.store.setLoading(false),
      });
  }

  createEmployee(employee: EmployeeCreate) {
    this.store.setLoading(true);
    return this.http
      .post<Employee>(`${this.apiRootUrl}/employees`, employee)
      .subscribe({
        error: () => this.toastr.error(`Could not create employee`),
        next: (detail) => this.store.upsert(detail.id, detail),
        complete: () => this.store.setLoading(false),
      });
  }
}
