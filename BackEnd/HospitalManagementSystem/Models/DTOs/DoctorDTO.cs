using System.ComponentModel.DataAnnotations;

namespace HospitalManagementSystem.Models.DTOs
{
    public class DoctorDTO:Doctor
    {
        public string? PasswordClear { get; set; }
    }
}
