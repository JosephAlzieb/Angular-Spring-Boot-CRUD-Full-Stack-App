package com.example.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employee.management.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}