function Footer() {
  return (
    <div class="max-w-4xl mb-3 mx-auto">
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-lime-800">
        <span class="text-sm text-lime-500 sm:text-center dark:text-lime-400">
          © 2022 LeanKhan. All Rights Reserved.
        </span>
      </footer>

      <p class="mt-5">
        By{" "}
        <a
          class="text-lime-600 hover:underline"
          href="https://github.com/leankhan"
          target="_blank"
          rel="noreferrer"
        >
          Emmanuel Segun-Lean
        </a>
      </p>
    </div>
  );
}

export default Footer;
