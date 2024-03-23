import { Component } from '@angular/core';
import * as aos from 'aos';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  formData = {
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  };

  showModal = false; 
  showSuccessModal = false;
  emailJSKey = process.env['EMAILJS_API_KEY'] || ''; 

  async onSubmit() {
    if (this.isFormValid()) { // Si el formulario es válido, envía el email
      emailjs.init(this.emailJSKey); // Convert apiKey to string using toString() method
      try {
        await emailjs.send("service_vcdu6b1", "template_f49hvij", {
          from_name: this.formData.from_name,
          from_email: this.formData.from_email,
          subject: this.formData.subject,
          message: this.formData.message
        });
        this.showSuccessModal = true
      } catch (error) {
        console.error('Failed to send email', error);
        // Manejar el error adecuadamente
      }
    } else {
      this.showModal = true; 
    }
  }

  isFormValid() {
    return this.formData.from_name && this.formData.from_email && this.formData.subject && this.formData.message;
  }

  closeModal() {
    this.showModal = false;
    this.showSuccessModal = false;
  }
  ngOnInit() {
    aos.init();
  }
}
