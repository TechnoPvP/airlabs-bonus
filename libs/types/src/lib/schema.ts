/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["AppController_getData"];
  };
  "/v1": {
    get: operations["AppController_getData"];
  };
  "/v1/employees": {
    get: operations["EmployeesController_list"];
    post: operations["EmployeesController_create"];
  };
  "/v1/employees/{id}": {
    get: operations["EmployeesController_retrive"];
    delete: operations["EmployeesController_remove"];
    patch: operations["EmployeesController_update"];
  };
  "/v1/reports": {
    get: operations["ReportsController_list"];
    post: operations["ReportsController_create"];
  };
  "/v1/employees/{employeeId}/reports": {
    get: operations["ReportsController_listByEmployee"];
  };
  "/v1/reports/{id}": {
    get: operations["ReportsController_retrive"];
    delete: operations["ReportsController_remove"];
    patch: operations["ReportsController_update"];
  };
  "/v1/danger-zones": {
    get: operations["DangerZonesController_list"];
    post: operations["DangerZonesController_create"];
  };
  "/v1/danger-zones/{id}": {
    get: operations["DangerZonesController_retrive"];
    delete: operations["DangerZonesController_remove"];
    patch: operations["DangerZonesController_update"];
  };
}

export interface components {
  schemas: {
    CreateEmployeeDto: {
      emp_no: string;
      homebase: string;
      human_resource_full_name: string;
      human_resource_brq: string;
      human_resource_rank: string;
      /** @enum {string} */
      type?: "PILOT" | "ATTENDANT";
    };
    UpdateEmployeeDto: { [key: string]: unknown };
    CreateReportDto: {
      start_date: string;
      from_date: string;
      to_date: string;
      code?: string;
      registration: string;
      dep_string: string;
      arr_string: string;
      vehicle_type?: string;
      roster_designators?: string;
      project_name_text?: string;
      employee_id: number;
    };
    EmployeeEntity: {
      emp_no: string;
      homebase: string;
      human_resource_full_name: string;
      human_resource_brq: string;
      human_resource_rank: string;
      /** @enum {string} */
      type?: "PILOT" | "ATTENDANT";
      id: number;
    };
    ReportEntity: {
      start_date: string;
      from_date: string;
      to_date: string;
      registration: string;
      dep_string: string;
      arr_string: string;
      vehicle_type?: string;
      roster_designators?: string;
      project_name_text?: string;
      employee_id: number;
      id: number;
      employeee: components["schemas"]["EmployeeEntity"];
      scheduled_hours_duration: string;
      code: string;
    };
    UpdateReportDto: {
      start_date?: string;
      from_date?: string;
      to_date?: string;
      code?: string;
      registration?: string;
      dep_string?: string;
      arr_string?: string;
      vehicle_type?: string;
      roster_designators?: string;
      project_name_text?: string;
    };
    CreateDangerZoneDto: {
      zone: string;
    };
    DangerZoneEntity: {
      zone: string;
      id: number;
    };
    UpdateDangerZoneDto: {
      zone?: string;
    };
  };
}

export interface operations {
  AppController_getData: {
    parameters: {};
    responses: {
      200: unknown;
    };
  };
  EmployeesController_list: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateEmployeeDto"][];
        };
      };
    };
  };
  EmployeesController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["CreateEmployeeDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateEmployeeDto"];
      };
    };
  };
  EmployeesController_retrive: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateEmployeeDto"];
        };
      };
    };
  };
  EmployeesController_remove: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateEmployeeDto"];
        };
      };
    };
  };
  EmployeesController_update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateEmployeeDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateEmployeeDto"];
      };
    };
  };
  ReportsController_list: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ReportEntity"][];
        };
      };
    };
  };
  ReportsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["ReportEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateReportDto"];
      };
    };
  };
  ReportsController_listByEmployee: {
    parameters: {
      path: {
        employeeId: number;
      };
      query: {
        start_date?: string;
        end_date?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ReportEntity"][];
        };
      };
    };
  };
  ReportsController_retrive: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ReportEntity"];
        };
      };
    };
  };
  ReportsController_remove: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ReportEntity"];
        };
      };
    };
  };
  ReportsController_update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ReportEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateReportDto"];
      };
    };
  };
  DangerZonesController_list: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DangerZoneEntity"][];
        };
      };
    };
  };
  DangerZonesController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["DangerZoneEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateDangerZoneDto"];
      };
    };
  };
  DangerZonesController_retrive: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DangerZoneEntity"];
        };
      };
    };
  };
  DangerZonesController_remove: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DangerZoneEntity"];
        };
      };
    };
  };
  DangerZonesController_update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DangerZoneEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateDangerZoneDto"];
      };
    };
  };
}

export interface external {}
