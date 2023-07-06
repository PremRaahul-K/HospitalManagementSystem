using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalManagementSystem.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }
        [ForeignKey("PatientId")]
        public User? User { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        [MinLength(4, ErrorMessage = "Name must be atleast 4 characters long")]
        public string? Name { get; set; }
        [Required(ErrorMessage = "Gender is required.")]
        public string? Gender { get; set; }
        [Required(ErrorMessage = "DateOfBirth is required.")]
        public DateTime? DateOfBirth { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        [Required(ErrorMessage = "BloodGroup is required.")]
        public string? BloodGroup { get; set; }

    }
}
