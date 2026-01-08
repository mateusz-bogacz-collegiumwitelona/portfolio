import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = pathname.startsWith("/pl") ? "en" : "pl";
    const newPath = pathname.replace(/^\/(pl|en)/, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Languages size={20} />
    </button>
  );
}
