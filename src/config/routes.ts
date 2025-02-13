class RoutePaths {
  private static readonly baseAuth: string = "/auth"

  public static readonly auth = {
    signIn: `${RoutePaths.baseAuth}/signin`,
  }

  public static readonly public = {
    home: "/",
  }

  public static readonly private = {
    dashboard: "/dashboard",
  }
}

export { RoutePaths }
