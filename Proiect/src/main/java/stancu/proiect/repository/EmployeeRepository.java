package stancu.proiect.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stancu.proiect.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
