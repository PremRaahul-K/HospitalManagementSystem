using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace HospitalManagementSystem.Models.DTOs
{
    public class PatientDTO:Patient
    {
        public string? PasswordClear { get; set; }

    }
}
