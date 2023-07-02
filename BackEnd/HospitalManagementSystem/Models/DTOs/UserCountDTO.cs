namespace HospitalManagementSystem.Models.DTOs
{
    public class UserCountDTO
    {
        public int PatientCount { get; set; }
        public int ApprovedDoctorCount { get; set; }
        public int NotApprovedDoctorCount { get; set; }

    }
}
