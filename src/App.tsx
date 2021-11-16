import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/home/HomePage";
import { SearchPage } from "./components/search/SearchPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
        background: "gray.100",
      },
      a: {
        color: "teal",
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});
