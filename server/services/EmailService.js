import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

class EmailService {
  constructor() {
    this.tranporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.tranporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: "",
      html: `
      <center style="width: 100%;table-layout:fixed;background-color: #dde0e1;padding-top: 40px;padding-bottom: 40px;">
      <div style="max-width: 600px;background-color: #fafdfe;box-shadow: 0 0 10px rgba(0, 0, 0, .2);">
        <table align="center" border="0" cellSpacing="0" role="presentation" style="color:#565656; font-family: 'Inter', sans-serif, Arial, Helvetica; background-color: rgb(0, 0, 0); margin: 0; padding-bottom: 30px; width: 100%; max-width: 600px">
            <tr>
              <td>
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                        <td style="display: flex; align-items:center; padding: 19px 0 19px 0; text-align: center; gap: 10px;">
                            <img src="https://i.ibb.co/rbytVR9/icon.png" alt="icon" border="0">
                            <h1 style="color: white;"><a href="${process.env.API_URL}" target="_blank" style="text-decoration: none; color: white;">Philosophy Blog</a></h1>
                        </td>
                    </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: 100%; max-width: 600px;">
                    <tr>
                        <td style="padding: 19px 0 19px 0; text-align: center;">
                            <h2 style="color: white;">Спасибо за регистрацию на нашем сервисе!</h2>
                        </td>
                    </tr>
                    <tr>
                      <td style="padding: 19px 0 19px 0; text-align: center;">
                        <img src="https://i.ibb.co/P6KGc3H/hero.png" alt="hero" border="0">
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 19px; text-align: center;">
                        <p style="text-align: justify; margin: 0; font-weight: 400; font-size: 16px; line-height: 25px; color: white;"><u><a href="${process.env.API_URL}" target="_blank" style="text-decoration: none; color: white;">Наш сайт</a></u> - философский блог, 
                          на котором вы сможете часами рассматривать 
                          красивые иллюстрации и идеи философов. Наш фронтендер просто красавчик, сделал все по красоте, бэкендер конечно говноед, но сойдет, выбора не было, сори, гайс</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 19px; text-align: center;">
                        <h3 style="margin: 0; font-weight: 600; font-size: 16px; line-height: 25px; color: white;">
                          Перейдите по ссылке для активации аккаунта
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <tr>
                            <td style="text-align: center;background-color: #489DFF;border-radius: 7px;">
                              <a href="${link}" target="_blank" style="background-color: #489DFF;font-weight: 600;font-size: 16px;line-height: 20px;color: #FFFFFF;text-align: center;text-decoration: none;padding: 16px 16px 16px 16px;display: inline-block;border-radius: 7px;">
                                &nbsp;&nbsp;&nbsp;Активировать аккаунт&nbsp;&nbsp;&nbsp;
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                </table>
              </td>
            </tr>
        </table>
    </div>
      `,
    });
  }
}

export const emailService = new EmailService();
