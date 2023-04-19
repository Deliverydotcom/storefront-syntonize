export interface LoginResponse {
  access_token:     string;
  token_type:       string;
  expires:          number;
  expires_in:       number;
  refresh_token:    string;
  user:             User;
  userAddress:      null;
  signupSource:     string;
  user_payments:    UserPayments;
  third_party_auth: string;
  uid:              string;
}

export interface User {
  email:                               string;
  first_name:                          string;
  last_name:                           string;
  phone:                               null;
  delivery_points:                     number;
  life_time_delivery_points:           number;
  user_id:                             number;
  customer_id:                         number;
  human_id:                            number;
  roles:                               string[];
  life_time_orders_count:              number;
  sms_notify:                          boolean;
  life_time_orders_count_per_vertical: LifeTimeOrdersCountPerVertical;
  average_order_value:                 number;
  account_integrations:                AccountIntegration[];
  pending_updates:                     PendingUpdates;
  office_user:                         null;
  is_tax_exempt:                       boolean;
  is_tax_exempt_default:               boolean;
}

export interface AccountIntegration {
  name:      string;
  is_linked: boolean;
}

export interface LifeTimeOrdersCountPerVertical {
  food:      number;
  alcohol:   number;
  groceries: number;
  laundry:   number;
  other:     number;
}

export interface PendingUpdates {
  to_email:    null;
  to_phone:    null;
  valid_until: boolean;
}

export interface UserPayments {
  credit_balance: CreditBalance;
  gift_cards:     any[];
  total_credit:   number;
}

export interface CreditBalance {
  id:    null;
  value: number;
}

export interface LoginData {
  username: string;
  password: string;
    g_recaptcha_response: string;
}
