// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { BearerStrategy } from 'passport-azure-ad';

// @Injectable()
// export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'azure-ad') {
//     constructor() {
//         super({
//             clientID: '9ea562be-e41b-4766-87c3-a4e6d2be2a95', //  Replace <YOUR_CLIENT_ID> with your Azure AD App ID
//             clientSecret: '66A8Q~tkveILRvngk-~GVws6Zsfu-P6uBAJdGaYQ', // Replace <YOUR_CLIENT_SECRET> with your Azure AD App Secret
//             callbackURL: 'http://localhost:3000/auth/azure-ad/callback', //Callback URL
//             resource: 'https://graph.windows.net',
//             tenant: '9a4813dd-fc07-4da9-a318-13010878873d', // Replace <YOUR_TENANT_ID> with your Azure AD tenant ID
//         });
//     }

//     async validate(accessToken: string, refreshToken: string, profile, done: (err: any, user: any) => void) {
//         try {
//             const user = {
//                 accessToken,
//                 refreshToken,
//                 profile
//             };
//             done(null, user);
//         } catch (err) {
//             done(err, null);
//         }
//     }
// }

import { Injectable } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

const clientID = '9ea562be-e41b-4766-87c3-a4e6d2be2a95';
const tenantID = '9a4813dd-fc07-4da9-a318-13010878873d';

/**
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
      clientID,
    });
  }

  async validate(data) {
    console.log({eee: 'eee'});
    
    return data;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
