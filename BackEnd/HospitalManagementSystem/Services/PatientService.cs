using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepo<int, Patient> _repo;

        public PatientService(IRepo<int,Patient> repo)
        {
            _repo = repo;
        }
        public async Task<Patient?> AddPatient(Patient patient)
        {
            var addedPatient = await _repo.Add(patient);
            if (addedPatient != null)
            {
                return addedPatient;
            }
            return null;
        }

        public async Task<Patient?> DeletePatient(int id)
        {
            var deletedPatient = await _repo.Delete(id);
            if (deletedPatient != null)
            {
                return deletedPatient;
            }
            return null;
        }

        public async Task<ICollection<Patient>?> GetAllPatients()
        {
            var patients = await _repo.GetAll();
            if (patients != null)
            {
                return patients;
            }
            return null;
        }

        public async Task<Patient?> GetPatient(int id)
        {
            var patient = await _repo.Get(id);
            if (patient != null)
            {
                return patient;
            }
            return null;
        }

        public async Task<Patient?> UpdatePatient(Patient patient)
        {
            var updatedPatient = await _repo.Update(patient);
            if (updatedPatient != null)
            {
                return updatedPatient;
            }
            return null;
        }
    }
}
