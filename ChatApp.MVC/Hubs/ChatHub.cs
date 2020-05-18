using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.MVC.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SentToAll(string message ,  string sender)=>
            await Clients.All.SendAsync("Broadcast", message, sender);
        
    }
}
