import { Request } from 'express';

class HelperUtil {
  public getSlug(name: string): string {
    const label = name.replace(/([^\w ]|_)/g, '');
    return `${label.replace(/\s+/g, '-').toLowerCase()}`;
  }

  public getOSName(req: Request) {
    const userAgent = req.headers['user-agent'];
    let os: string;
    if (userAgent.toLowerCase().indexOf('mac') !== -1) {
      os = 'Mac';
    } else if (userAgent.toLowerCase().indexOf('windows') !== -1) {
      os = 'Windows';
    } else if (userAgent.toLowerCase().indexOf('x11') !== -1) {
      os = 'Unix';
    } else if (userAgent.toLowerCase().indexOf('android') !== -1) {
      os = 'Android';
    } else if (userAgent.toLowerCase().indexOf('iphone') !== -1) {
      os = 'IOS';
    } else {
      os = 'Unknown';
    }
    return os;
  }

  public getBrowserName(req: Request) {
    const userAgent = req.headers['user-agent'];
    let browser: string;
    if (userAgent.toLowerCase().indexOf('chrome') !== -1) {
      browser = 'Chrome';
    } else if (userAgent.toLowerCase().indexOf('safari') !== -1) {
      browser = 'Safari';
    } else if (userAgent.toLowerCase().indexOf('firefox') !== -1) {
      browser = 'Firefox';
    } else if (userAgent.toLowerCase().indexOf('edge') !== -1) {
      browser = 'Edge';
    } else if (userAgent.toLowerCase().indexOf('opera') !== -1) {
      browser = 'Opera';
    } else if (
      userAgent.toLowerCase().indexOf('msie') !== -1 ||
      userAgent.toLowerCase().indexOf('trident') !== -1
    ) {
      browser = 'Internet Explorer';
    } else {
      browser = 'an Unknown Browser';
    }
    return browser;
  }
}

export default new HelperUtil();
