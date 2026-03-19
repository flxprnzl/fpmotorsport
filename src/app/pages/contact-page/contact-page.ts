import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [Navbar, Footer, FormsModule, CommonModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
  private readonly SERVICE_ID  = 'service_nv781sf';
  private readonly TEMPLATE_ID = 'template_snsgg9e';
  private readonly PUBLIC_KEY  = 'tUiyTG1RKxqYmHWJp';

  status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) return;

    this.status.set('loading');

    const { name, email, subject, message } = form.value;

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
        this.PUBLIC_KEY
      );
      this.status.set('success');
      form.resetForm();
    } catch {
      this.status.set('error');
    }
  }
}