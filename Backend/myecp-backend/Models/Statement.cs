using System.Collections.Generic;

namespace AAFES_MYECP_POC.Models
{
    public class Statement
    {
        public int Id { get; set; }
        public int CardId { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public List<Transaction> TransactionsList { get; set; }
    }
}