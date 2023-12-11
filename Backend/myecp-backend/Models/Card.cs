namespace AAFES_MYECP_POC.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public int CCV { get; set; }
        public string ExpiryDate { get; set; }
    }
}