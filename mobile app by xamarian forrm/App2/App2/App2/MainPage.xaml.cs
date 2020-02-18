using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App2
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void onvaluechange(object sender, ValueChangedEventArgs e)
        {
            public MainPage()
            {
                InitializeComponent();
            }
            double value1;
          
            private void onvaluechange(object sender, ValueChangedEventArgs e)
            {
                lbl1.Text = e.NewValue.ToString();
                value1 = e.NewValue;
            }

            async void submit(object sender, EventArgs e)
            {
                string item1 = itm1.Text;
                

                if (value1 > 500 && value1 < 600)
                {
                    await DisplayAlert("You are buying pizza ", itm1.Text, "OK");
                }
                else if (value1 > 600 && value1 < 700)
                {
                    await DisplayAlert("You are buying burger ", itm1.Text, "OK");
                }
                else (value1 > 800 && value1 < 1000)
                {
                    await DisplayAlert("Your order is rice bowl ", itm1.Text, "OK");
                }


            }
        }
    }
 
}
