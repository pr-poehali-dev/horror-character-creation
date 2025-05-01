
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Имя пользователя должно содержать минимум 3 символа",
    })
    .max(20, {
      message: "Имя пользователя не должно превышать 20 символов",
    }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  password: z
    .string()
    .min(8, {
      message: "Пароль должен содержать минимум 8 символов",
    })
    .regex(/[A-Z]/, {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    })
    .regex(/[0-9]/, {
      message: "Пароль должен содержать хотя бы одну цифру",
    }),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "Вы должны принять условия использования",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Здесь будет логика регистрации
    alert("Заявка на регистрацию отправлена на рассмотрение администрации");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with blood dripping effect */}
      <header className="bg-black py-6 border-b border-red-900">
        <div className="container mx-auto px-4">
          <h1 className="horror-title text-5xl md:text-6xl text-red-600 text-center mb-2">
            <Link to="/">
              Хоррис<span className="text-white">Lady</span>
            </Link>
          </h1>
          <p className="text-gray-400 text-center italic">
            Коллекция жутких историй и персонажей
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-red-500 flex items-center justify-center">
              <Icon name="UserPlus" className="mr-2 text-red-500" />
              Создание аккаунта
            </h2>
            <p className="text-gray-400 mt-2">
              Для создания собственных историй и персонажей необходима
              регистрация и разрешение администрации
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-red-900 shadow-lg">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">
                        Имя пользователя
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="МрачныйХронист"
                          {...field}
                          className="bg-gray-800 border-gray-700 text-gray-200"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-500">
                        Имя, которое будет отображаться на сайте
                      </FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-gray-800 border-gray-700 text-gray-200"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Пароль</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                          className="bg-gray-800 border-gray-700 text-gray-200"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-500">
                        Минимум 8 символов, включая заглавную букву и цифру
                      </FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">
                        Подтверждение пароля
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                          className="bg-gray-800 border-gray-700 text-gray-200"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-300">
                          Я принимаю условия использования и соглашаюсь с
                          политикой конфиденциальности
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white"
                >
                  <Icon name="UserPlus" className="mr-2" />
                  Отправить заявку
                </Button>

                <div className="text-center mt-4 text-gray-400 text-sm">
                  Уже есть аккаунт?{" "}
                  <Link to="/" className="text-red-400 hover:underline">
                    Войти
                  </Link>
                </div>
              </form>
            </Form>
          </div>

          <div className="mt-8 p-4 border border-red-900/50 rounded bg-gray-900/50">
            <p className="text-gray-400 text-sm flex items-start">
              <Icon
                name="AlertTriangle"
                className="text-red-500 mr-2 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                После регистрации ваша заявка будет рассмотрена администрацией.
                Только после одобрения вы сможете создавать собственные истории и
                персонажей.
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-red-900">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 ХоррисLady • Все права защищены</p>
          <p className="mt-2">
            Создание персонажей только с разрешения администрации сайта
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
