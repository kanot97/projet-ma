class ContactMailer < ApplicationMailer
  def send_contact_email(name, email, message)
    @name = name
    @message = message

    mail(to: email, subject: "New Contact from #{@name}")
  end
end
