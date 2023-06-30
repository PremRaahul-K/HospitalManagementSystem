using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using System.Numerics;

namespace HospitalManagementSystem.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly IRepo<int, Doctor> _repo;

        public DoctorService(IRepo<int,Doctor> repo)
        {
            _repo = repo;
        }
        public async Task<Doctor?> AddDcotor(Doctor user)
        {
            var addedUser = await _repo.Add(user);
            if (addedUser != null)
            {
                return addedUser;
            }
            return null;
        }

        public async Task<Doctor?> DeleteDcotor(int id)
        {
            var deletedUser = await _repo.Delete(id);
            if (deletedUser != null)
            {
                return deletedUser;
            }
            return null;
        }

        public async Task<ICollection<Doctor>?> GetAllDcotors()
        {
            var doctors = await _repo.GetAll();
            if (doctors != null)
            {
                return doctors;
            }
            return null;
        }

        public async Task<Doctor?> GetDcotor(int id)
        {
            var doctor = await _repo.Get(id);
            if (doctor != null)
            {
                return doctor;
            }
            return null;
        }

        public async Task<Doctor?> UpdateDoctor(Doctor doctor)
        {
            var updatedDoctor = await _repo.Update(doctor);
            if (updatedDoctor != null)
            {
                return updatedDoctor;
            }
            return null;
        }
    }
}
