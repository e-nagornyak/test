class RoutePaths {
  private static readonly baseAuth: string = "/auth"
  private static readonly baseMyProfile: string = "/my-profile"

  public static readonly auth = {
    login: `${RoutePaths.baseAuth}/login`,
    register: `${RoutePaths.baseAuth}/register`,
  }
}

export { RoutePaths }
