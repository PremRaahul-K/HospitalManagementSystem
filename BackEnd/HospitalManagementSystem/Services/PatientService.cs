using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using System.Security.Cryptography;
using System.Text;
using UserAPI.Services;

namespace HospitalManagementSystem.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepo<int, Patient> _repo;
        private readonly ITokenGenerate _tokenService;

        public PatientService(IRepo<int,Patient> repo,ITokenGenerate tokenService)
        {
            _repo = repo;
            _tokenService = tokenService;
        }
        public async Task<UserResponseDTO?> AddPatient(PatientDTO patient)
        {
            UserResponseDTO user = null;
            var hmac = new HMACSHA512();
            patient.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(patient.PasswordClear));
            patient.User.PasswordKey = hmac.Key;
            patient.User.Role = "Patient";
            var addedPatient = await _repo.Add(patient);
            if (addedPatient != null)
            {
                user = new UserResponseDTO
                {
                    Id = addedPatient.User.Id,
                    Role = addedPatient.User.Role,
                    Token = await _tokenService.GenerateToken(addedPatient.User)
                };
                return user;
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
