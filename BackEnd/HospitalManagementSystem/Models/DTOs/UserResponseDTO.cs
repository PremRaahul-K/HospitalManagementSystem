namespace HospitalManagementSystem.Models.DTOs
{
    public class UserResponseDTO
    {
        public int UserId { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
    }
}
