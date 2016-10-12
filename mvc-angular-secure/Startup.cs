using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mvc_angular_secure.Startup))]
namespace mvc_angular_secure
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
