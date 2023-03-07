class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.valid?
      ContactMailer.send_contact_email(@contact.name, @contact.email, @contact.message).deliver_now
      redirect_to root_path, notice: "Your message was successfully sent."
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
