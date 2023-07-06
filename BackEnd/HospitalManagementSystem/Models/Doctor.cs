using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalManagementSystem.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        [ForeignKey("DoctorId")]
        public User? User { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        [MinLength(4, ErrorMessage = "Name must be atleast 4 characters long")]
        public string? Name { get; set; }
        [Required(ErrorMessage = "Gender is required.")]
        public string? Gender { get; set; }
        [Required(ErrorMessage = "Date of birth is required")]
        [Column(TypeName = "date")]
        public DateTime? DateOfBirth { get; set; }
        [Required(ErrorMessage = "Mobile number is required")]
        [Phone(ErrorMessage = "Invalid phone number.")]
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        [Required(ErrorMessage = "Specialization is required")]
        public string? Specialization { get; set; }
        [Required(ErrorMessage = "Qualifications is required")]
        public string? Qualifications { get; set; }
        [Required(ErrorMessage = "LicenseNumber is required")]
        public string? LicenseNumber { get; set; }
        [Required(ErrorMessage = "Experience is required")]
        public int Experience { get; set; }
        [Required(ErrorMessage = "About is required")]
        public string? About { get; set; }
        public string? Status { get; set; }
    }
}
