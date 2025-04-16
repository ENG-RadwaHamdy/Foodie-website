import { localize, setLocale } from '@vee-validate/i18n';
import { defineRule, configure } from 'vee-validate';
import { required, between, email, confirmed, min, max, alpha, numeric } from '@vee-validate/rules';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import Cookies from 'js-cookie';
export default defineNuxtPlugin(async () => {
    configure({
        generateMessage: localize({
            ar,
            en,
        },
        ),
    });
    setLocale(Cookies.get('_lang') || 'en')
    defineRule('required', required);
    defineRule('email', email);
    defineRule('between', between);
    defineRule('confirmed', confirmed);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha', alpha);
    defineRule('numeric', numeric);
    defineRule('max_words', (value, args) => {
        if (!value) return true;
        const words = value.trim().split(/\s+/);
        return words.length <= args[0];
      });
})
